package name.jchein.portfolio.micros.resolution.registry.domain

import com.google.common.base.Preconditions
import io.eventuate.Event
import io.eventuate.ReflectiveMutableCommandProcessingAggregate
import java.util.Collections
import java.util.List
import javax.validation.Valid
import javax.validation.constraints.Min
import javax.validation.constraints.NotNull
import javax.validation.executable.ValidateOnExecution
import name.jchein.portfolio.micros.resolution.registry.domain.command.AcceptPaintPolicy
import name.jchein.portfolio.micros.resolution.registry.domain.command.DeprecatePaintPolicy
import name.jchein.portfolio.micros.resolution.registry.domain.command.PaintPolicyCommand
import name.jchein.portfolio.micros.resolution.registry.domain.command.RejectPaintPolicy
import name.jchein.portfolio.micros.resolution.registry.domain.command.RenamePaintPolicy
import name.jchein.portfolio.micros.resolution.registry.domain.command.RequestPaintPolicy
import name.jchein.portfolio.micros.resolution.registry.event.PaintPolicyAccepted
import name.jchein.portfolio.micros.resolution.registry.event.PaintPolicyDeprecated
import name.jchein.portfolio.micros.resolution.registry.event.PaintPolicyRejected
import name.jchein.portfolio.micros.resolution.registry.event.PaintPolicyRenamed
import name.jchein.portfolio.micros.resolution.registry.event.PaintPolicyRequested
import org.eclipse.xtend.lib.annotations.Accessors
import org.hibernate.validator.constraints.NotBlank
import org.springframework.beans.BeanUtils

import static extension io.eventuate.EventUtil.events

@Accessors
@ValidateOnExecution(type=#[NON_GETTER_METHODS])
class PaintPolicy extends ReflectiveMutableCommandProcessingAggregate<PaintPolicy, PaintPolicyCommand> {
	private static final List<Event> EMPTY_LIST = Collections.emptyList
	
	@NotNull
	LifecycleState lifecycleState = LifecycleState.PENDING
	
	@NotNull
	@NotBlank
	String displayName;

	@Min(64)
	int paintHeight;

	@Min(64)
	int paintWidth;

	double modelCenterX;

	double modelCenterY;

	// TODO: Needs to be non-negative.  0 is not an inclusive lower-bound!
	@Min(0)
	double modelScaleX;

	@Min(0)
	double modelScaleY;

	@NotNull
	PointMapShape shape;

	def List<Event> process(@Valid RequestPaintPolicy cmd) {
		return #[
			PaintPolicyRequested.build [
				BeanUtils.copyProperties(cmd, it);
			]
		].events()
	}

	def List<Event> process(@Valid RenamePaintPolicy cmd) {
		if (cmd.newDisplayName === this.displayName) {
			return EMPTY_LIST
		}

		return #[
			PaintPolicyRenamed.build [
				it.newDisplayName = cmd.newDisplayName
				it.grounds = cmd.grounds
			]
		].events()
	}

	def List<Event> process(@Valid RejectPaintPolicy cmd) {
		Preconditions.checkState(
			this.lifecycleState === LifecycleState.PENDING
		)
		return #[
			PaintPolicyRejected.build [
				it.grounds = cmd.grounds 
			]
		].events()
	}

	def List<Event> process(AcceptPaintPolicy cmd) {
		Preconditions.checkState(
			this.lifecycleState === LifecycleState.PENDING
		)
		return #[
			PaintPolicyAccepted.build [
				it.grounds = cmd.grounds 
			]
		].events()
	}

	def List<Event> process(DeprecatePaintPolicy cmd) {
		Preconditions.checkState(
			this.lifecycleState === LifecycleState.ACTIVE
		)
		return #[
			PaintPolicyDeprecated.build [
				it.grounds = cmd.grounds 
			]
		].events()
	}
	
	
	def void apply(PaintPolicyRequested evt) {
		BeanUtils.copyProperties(evt, this);
	}

	def void apply(PaintPolicyRenamed evt) {
		this.displayName = evt.newDisplayName;
	}

	def void apply(PaintPolicyRejected evt) {
		this.lifecycleState = LifecycleState.REJECTED
	}

	def void apply(PaintPolicyAccepted evt) {
		this.lifecycleState = LifecycleState.ACTIVE
	}

	def void apply(PaintPolicyDeprecated evt) {
		this.lifecycleState = LifecycleState.DEPRECATED
	}
}
