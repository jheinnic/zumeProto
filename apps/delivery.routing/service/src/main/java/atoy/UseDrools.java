package atoy;

import java.io.IOException;

import org.kie.api.KieServices;
import org.kie.api.builder.KieBuilder;
import org.kie.api.builder.KieFileSystem;
import org.kie.api.builder.KieModule;
import org.kie.api.builder.KieRepository;
import org.kie.api.builder.ReleaseId;
import org.kie.api.io.Resource;
import org.kie.api.runtime.KieContainer;
import org.kie.internal.io.ResourceFactory;

public class UseDrools
{

	public static void main(String[] args) throws IOException
	{
		UseDrools singleton = new UseDrools();
		KieContainer container = singleton.kieContainer();
		if (container != null) {
			System.out.println("Success");
		}
	}
	
	private KieServices kieServices = KieServices.Factory.get();
	private static final String RULES_PATH = "";
	
	public KieServices getKieServices() {
		return this.kieServices;
	}
	
	public String[] getRulePaths() {
		return new String[] { "org/optaplanner/examples/vehiclerouting/solver/vehicleRoutingScoreRules.drl" };
	}
	
	public KieFileSystem kieFileSystem() throws IOException {
	    KieFileSystem kieFileSystem = getKieServices().newKieFileSystem();
	        for (String relativePath : getRulePaths()) {
	            kieFileSystem.write(
	              ResourceFactory.newClassPathResource(
	              RULES_PATH + relativePath, "UTF-8"));
	        }
	        return kieFileSystem;
	}

	public KieContainer kieContainer() throws IOException {
	    KieRepository kieRepository = getKieServices().getRepository();
	 
	    kieRepository.addKieModule(new KieModule() {
	        public ReleaseId getReleaseId() {
	            return kieRepository.getDefaultReleaseId();
	        }
	    });
	 
	    KieBuilder kieBuilder = getKieServices()
	      .newKieBuilder(kieFileSystem())
	      .buildAll();
	 
	    return getKieServices().newKieContainer(kieRepository.getDefaultReleaseId());
	}
}
