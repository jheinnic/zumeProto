README
===

Package Namespaces
===

name.jchein.				Home prefix for all project-defined code
	portfolio.common.*subject*	Home to reusable support code that is not specific to this particular demo

	demo.zumepizza.			Home prefix for all project-owned code that is specific to this demo instance

		grpc.proto.*microservice suffix*	Home to all GRPC stubs for a microservice

		grpc.client.*microservice suffix*	Home to Spring Config and implementation for a GRPC client

		service.*microservice suffix*		Home to Spring Application for a microservice, organized for component scanning, each subpackage constitutes a testable unit.

		service.*microservice suffix*.domain	Home to Microservice write side domain model, commands, and write-side event handlers

		service.*microservice suffix*.view      Home to Microservice read side query model and read-side event handlers
							** Note: Either this is a public contract DTO as well as an Entity, or there is a DTO/Proto abstraction missing for Query APIs

		service.*microservice suffix*.repo      Home to Microservice read side view repositories

		service.*microservice suffix*.backend   Home to Microservice write side domain service

		service.*microservice suffix*.process   Home to Microservice read side process/workflow management
							** Note: Gateways?  Service Activators
							** Note: Async alarm timers?
							** Note: IoT Event Handling?

		service.*microservice suffix*.event     Home to Microservice event model
							** Note: Maybe be misplaced as this is a shared public contract, closer to GRPC.proto...
							** Note: No Spring Config for this subunit either...

		service.*microservice suffix*.grpc	Home to GRPC Server-side Controllers (analagous to Rest Controller)

		service.*microservice suffix*.web	Home to RESTful RequestHandler Controllers
