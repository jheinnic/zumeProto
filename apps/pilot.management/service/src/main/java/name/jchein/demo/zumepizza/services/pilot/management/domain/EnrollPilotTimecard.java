package name.jchein.demo.zumepizza.services.pilot.management.domain;

import java.util.function.Consumer;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.ScriptAssert;

import lombok.Builder;
import lombok.Value;
import name.jchein.common.validation.constraints.UUIDString;

@Value
@Builder(toBuilder=true)
@ScriptAssert.List({
})
public class EnrollPilotTimecard implements PilotTimecardCommand {
    @NotNull
    @UUIDString
    String uuid;

    @NotNull
    @UUIDString
    String pilotUuid;
    
    @NotNull
    @NotBlank
    String firstName;

    @NotBlank
    String middleName;

    @NotNull
    @NotBlank
    String lastName;
   
	public static EnrollPilotTimecard build(Consumer<EnrollPilotTimecardBuilder> director) {
		final EnrollPilotTimecardBuilder bldr = EnrollPilotTimecard.builder();
		director.accept(bldr);
		return bldr.build();
	}
	
	public EnrollPilotTimecard copy(Consumer<EnrollPilotTimecardBuilder> director) {
		final EnrollPilotTimecardBuilder bldr = this.toBuilder();
		director.accept(bldr);
		return bldr.build();
	}
}
