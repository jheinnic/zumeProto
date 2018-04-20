package name.jchein.demo.zumepizza.services.delivery.routing.domain;


import java.util.Collections;
import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.executable.ExecutableType;
import javax.validation.executable.ValidateOnExecution;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.beans.BeanUtils;
import com.google.common.base.Preconditions;

import io.eventuate.Event;
import static io.eventuate.EventUtil.events;
import io.eventuate.ReflectiveMutableCommandProcessingAggregate;
import name.jchein.demo.zumepizza.services.delivery.routing.command.AcceptPaintPolicy;
import name.jchein.demo.zumepizza.services.delivery.routing.command.DeprecatePaintPolicy;
import name.jchein.demo.zumepizza.services.delivery.routing.command.PaintPolicyCommand;
import name.jchein.demo.zumepizza.services.delivery.routing.command.RejectPaintPolicy;
import name.jchein.demo.zumepizza.services.delivery.routing.command.RenamePaintPolicy;
import name.jchein.demo.zumepizza.services.delivery.routing.command.RequestPaintPolicy;
import name.jchein.demo.zumepizza.services.delivery.routing.event.PaintPolicyAccepted;
import name.jchein.demo.zumepizza.services.delivery.routing.event.PaintPolicyDeprecated;
import name.jchein.demo.zumepizza.services.delivery.routing.event.PaintPolicyRejected;
import name.jchein.demo.zumepizza.services.delivery.routing.event.PaintPolicyRenamed;
import name.jchein.demo.zumepizza.services.delivery.routing.event.PaintPolicyRequested;
import name.jchein.demo.zumepizza.services.delivery.routing.event.PointMapShape;


@ValidateOnExecution(type = ExecutableType.NON_GETTER_METHODS)
public class ServiceDay
extends ReflectiveMutableCommandProcessingAggregate<PaintPolicy, PaintPolicyCommand>
{
	private static final List<Event> EMPTY_LIST = Collections.emptyList();

	@NotNull
	LifecycleState lifecycleState = LifecycleState.PENDING;

	@NotNull
	@NotBlank
	String displayName;

	@Min(64)
	int paintHeight;

	@Min(64)
	int paintWidth;

	double modelCenterX;

	double modelCenterY;

	// TODO: Needs to be non-negative. 0 is not an inclusive lower-bound!
	@Min(0)
	double modelScaleX;

	@Min(0)
	double modelScaleY;

	@NotNull
	PointMapShape shape;


	List<Event> process(@Valid RequestPaintPolicy cmd)
	{
		return events(PaintPolicyRequested.build((builder) -> {
			BeanUtils.copyProperties(cmd, builder);
		}));

	}


	List<Event> process(@Valid RenamePaintPolicy cmd)
	{
		String newDisplayName = cmd.getNewDisplayName();
		if ((newDisplayName == this.displayName) ||
			(this.displayName.equals(newDisplayName))) { return EMPTY_LIST; }

		return events(PaintPolicyRenamed.build((builder) -> {
			builder.newDisplayName(newDisplayName);
		}));
	}


	List<Event> process(@Valid RejectPaintPolicy cmd)
	{
		Preconditions.checkState(this.lifecycleState == LifecycleState.PENDING);
		// return #[
		// PaintPolicyRejected.build [
		// it.grounds = cmd.grounds
		// ]
		// ].events()
		throw new UnsupportedOperationException("TODO");
	}


	List<Event> process(AcceptPaintPolicy cmd)
	{
		Preconditions.checkState(this.lifecycleState == LifecycleState.PENDING);
		// return #[
		// PaintPolicyAccepted.build [
		// it.grounds = cmd.grounds
		// ]
		// ].events()
		throw new UnsupportedOperationException("TODO");
	}


	List<Event> process(DeprecatePaintPolicy cmd)
	{
		Preconditions.checkState(this.lifecycleState == LifecycleState.ACTIVE);
		// return #[
		// PaintPolicyDeprecated.build [
		// it.grounds = cmd.grounds
		// ]
		// ].events()
		throw new UnsupportedOperationException("TODO");
	}


	void apply(PaintPolicyRequested evt)
	{
		BeanUtils.copyProperties(evt, this);
	}


	void apply(PaintPolicyRenamed evt)
	{
		this.displayName = evt.getNewDisplayName();
	}


	void apply(PaintPolicyRejected evt)
	{
		this.lifecycleState = LifecycleState.REJECTED;
	}


	void apply(PaintPolicyAccepted evt)
	{
		this.lifecycleState = LifecycleState.ACTIVE;
	}


	void apply(PaintPolicyDeprecated evt)
	{
		this.lifecycleState = LifecycleState.DEPRECATED;
	}
}
