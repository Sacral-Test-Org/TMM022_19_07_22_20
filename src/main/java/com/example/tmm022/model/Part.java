package com.example.tmm022.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "HPM_PART_MASTER")
public class Part {

    @Id
    @Column(name = "PART_ID")
    private String partId;

    @Column(name = "UNIT_ID")
    private String unitId;

    @Column(name = "GROUP_ID")
    private String groupId;

    @Column(name = "LINE_ID")
    private String lineId;

    @Column(name = "PARTNO")
    private String partNumber;

    @Column(name = "PART_DESC")
    private String partDescription;

    @Column(name = "PART_STATUS")
    private String partStatus;

    @Column(name = "LINE_DESC")
    private String lineDesc;

    // Getters and Setters

    public String getPartId() {
        return partId;
    }

    public void setPartId(String partId) {
        this.partId = partId;
    }

    public String getUnitId() {
        return unitId;
    }

    public void setUnitId(String unitId) {
        this.unitId = unitId;
    }

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    public String getLineId() {
        return lineId;
    }

    public void setLineId(String lineId) {
        this.lineId = lineId;
    }

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public String getPartDescription() {
        return partDescription;
    }

    public void setPartDescription(String partDescription) {
        this.partDescription = partDescription;
    }

    public String getPartStatus() {
        return partStatus;
    }

    public void setPartStatus(String partStatus) {
        this.partStatus = partStatus;
    }

    public String getLineDesc() {
        return lineDesc;
    }

    public void setLineDesc(String lineDesc) {
        this.lineDesc = lineDesc;
    }
}