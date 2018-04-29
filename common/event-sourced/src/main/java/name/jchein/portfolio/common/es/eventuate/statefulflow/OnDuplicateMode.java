package name.jchein.portfolio.common.es.eventuate.statefulflow;

public enum OnDuplicateMode
{
	CALL_NEW,
	CALL_EXISTING,
	RAISE_ERROR;
}
