import { ExampleClient } from "../generated/name/jchein/demo/zumepizza/services/edge/potato/grpc-spec_pb_service";
import { CreateExampleRequest } from "../generated/name/jchein/demo/zumepizza/services/edge/potato/grpc-spec_pb";
import { BasicReply } from "../generated/name/jchein/portfolio/common/grpc/action/actions_pb";
import { v1 as uuidv1 } from "uuid";

export const client = new ExampleClient("http://portfolio.dev.jchein.name:9090");

export function callExample() {
	const req = new CreateExampleRequest();
	
	req.setFirstname("John");
	req.setMiddlename("Q");
	req.setLastname("Public");
	req.setId(uuidv1());
	req.setPilotid(uuidv1());
	
	return client.createExample(req, (err: any, basicReply: BasicReply|null) => { 
		if (!!err) {
			console.log(JSON.stringify(err));
		} else {
			console.log(JSON.stringify(basicReply));
		}
	});
}
