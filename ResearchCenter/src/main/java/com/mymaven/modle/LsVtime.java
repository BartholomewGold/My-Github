/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.modle;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * LsVtime entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "ls_vtime", schema = "dbo", catalog = "dmdb")
public class LsVtime implements java.io.Serializable {

	// Fields

	private LsVtimeId id;

	// Constructors

	/** default constructor */
	public LsVtime() {
	}

	/** full constructor */
	public LsVtime(LsVtimeId id) {
		this.id = id;
	}

	// Property accessors
	@EmbeddedId
	@AttributeOverrides({
			@AttributeOverride(name = "cdid", column = @Column(name = "cdid", length = 20)),
			@AttributeOverride(name = "dylever", column = @Column(name = "dylever", length = 2)),
			@AttributeOverride(name = "dy", column = @Column(name = "dy", length = 8)),
			@AttributeOverride(name = "time1", column = @Column(name = "time1", length = 50)),
			@AttributeOverride(name = "time2", column = @Column(name = "time2", length = 50)),
			@AttributeOverride(name = "time3", column = @Column(name = "time3", length = 50)),
			@AttributeOverride(name = "time4", column = @Column(name = "time4", length = 50)),
			@AttributeOverride(name = "time5", column = @Column(name = "time5", length = 50)),
			@AttributeOverride(name = "time6", column = @Column(name = "time6", length = 50)),
			@AttributeOverride(name = "time7", column = @Column(name = "time7", length = 50)),
			@AttributeOverride(name = "time8", column = @Column(name = "time8", length = 50)),
			@AttributeOverride(name = "time9", column = @Column(name = "time9", length = 50)),
			@AttributeOverride(name = "cdmc", column = @Column(name = "cdmc", length = 50)) })
	public LsVtimeId getId() {
		return this.id;
	}

	public void setId(LsVtimeId id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "LsVtime [id=" + id.toString() + "]";
	}
	
	

}