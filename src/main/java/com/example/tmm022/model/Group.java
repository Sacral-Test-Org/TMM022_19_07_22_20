package com.example.tmm022.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "MES_GROUP_MASTER")
public class Group {

    @Id
    @Column(name = "GROUP_ID")
    private String groupID;

    @Column(name = "GROUP_NAME")
    private String groupName;

    @Column(name = "GROUP_SECTION")
    private String unitID;

    // Getters and Setters

    public String getGroupID() {
        return groupID;
    }

    public void setGroupID(String groupID) {
        this.groupID = groupID;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getUnitID() {
        return unitID;
    }

    public void setUnitID(String unitID) {
        this.unitID = unitID;
    }
}
