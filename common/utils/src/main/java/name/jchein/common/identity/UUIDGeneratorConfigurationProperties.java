package name.jchein.common.identity;


import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.ScriptAssert;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;


@Validated
@ScriptAssert.List(value = {
	@ScriptAssert(lang = "ECMAScript", alias="_this", script = "(_this.node != 'FILE') || (_this.nodeFile.length > 0)"),
	@ScriptAssert(lang = "ECMAScript", alias="_this",
		script = "(_this.node != 'PROPERTY') || ((_this.nodeValue >= 0) && (_this.nodeValue < 0x1000000000000))"),
	@ScriptAssert(lang = "ECMAScript", alias="_this", script = "(_this.clockSeq != 'FILE') || (_this.clockSeqFile.length > 0)"),
	@ScriptAssert(lang = "ECMAScript", alias="_this",
		script = "(_this.clockSeq != 'PROPERTY') || ((_this.clockSeqValue >= 0) && (_this.clockSeqValue < 0x4000))"),
	@ScriptAssert(lang = "ECMAScript", alias="_this", script = "_this.node == 'JUG'",
		message = "JUG is currently the only supported node bits source"),
	@ScriptAssert(lang = "ECMAScript", alias="_this", script = "_this.clockSeq == 'JUG'",
		message = "JUG is currently the only supported clock sequence bits source")
})
@ConfigurationProperties("jchptf.uuidgen")
public class UUIDGeneratorConfigurationProperties
{
	@NotNull
	private BitSource node = BitSource.JUG;

	private String nodeFile = "";
	private int nodeValue = -1;

	@NotNull
	private BitSource clockSeq = BitSource.JUG;

	private String clockSeqFile = "";
	private int clockSeqValue = -1;


	public BitSource getNode()
	{
		return node;
	}


	public void setNode(BitSource node)
	{
		this.node = node;
	}


	public String getNodeFile()
	{
		return nodeFile;
	}


	public void setNodeFile(String nodeFile)
	{
		this.nodeFile = nodeFile;
	}


	public int getNodeValue()
	{
		return nodeValue;
	}


	public void setNodeValue(int nodeValue)
	{
		this.nodeValue = nodeValue;
	}


	public BitSource getClockSeq()
	{
		return clockSeq;
	}


	public void setClockSeq(BitSource clockSeq)
	{
		this.clockSeq = clockSeq;
	}


	public String getClockSeqFile()
	{
		return clockSeqFile;
	}


	public void setClockSeqFile(String clockSeqFile)
	{
		this.clockSeqFile = clockSeqFile;
	}


	public int getClockSeqValue()
	{
		return clockSeqValue;
	}


	public void setClockSeqValue(int clockSeqValue)
	{
		this.clockSeqValue = clockSeqValue;
	}
}
