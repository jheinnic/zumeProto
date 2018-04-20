//package toy.test;
//
//import java.io.IOException;
//import java.util.HashMap;
//
//import org.eclipse.emf.common.util.URI;
//import org.eclipse.emf.ecore.resource.Resource;
//import org.eclipse.emf.ecore.resource.ResourceSet;
//import org.eclipse.emf.ecore.resource.impl.ResourceSetImpl;
//import org.eclipse.viatra.query.runtime.emf.EMFScope;
//import org.eclipse.viatra.query.runtime.exception.ViatraQueryException;
//
//public class ToyTest {
//
//	public static void main(String[] args) {
//		// TODO Auto-generated method stub
//
//	}
//
//	private EMFScope initializeModelScope() throws IOException, ViatraQueryException {
//		ResourceSet rs = new ResourceSetImpl();
//		Resource res = rs.createResource(URI.createPlatformPluginURI("org.eclipse.viatra.examples.cps.queries/example.cyberphysicalsystem", false));
//		res.load(new HashMap<>());
//		return new EMFScope(rs);
//	}
//}
