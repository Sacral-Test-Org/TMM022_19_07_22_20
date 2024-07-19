package com.example.tmm022.service;

import com.example.tmm022.repository.PartRepository;
import com.example.tmm022.dto.PartDTO;
import com.example.tmm022.entity.Part;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartService {

    @Autowired
    private PartRepository partRepository;

    @Autowired
    private UnitService unitService;

    public boolean checkPartExists(String partId, String unitId, String groupId, String lineId) {
        return partRepository.findPart(partId, unitId, groupId, lineId).isPresent();
    }

    public void savePart(Part part) {
        partRepository.save(part);
    }

    public void updatePart(Part part) {
        partRepository.save(part);
    }

    public List<String> lookupPartNumber(int globalParameter) {
        return partRepository.findPartNumbers(globalParameter);
    }

    public boolean validatePartNumber(String partNumber, String partDescription) {
        return partRepository.validatePartNumber(partNumber, partDescription);
    }

    public List<String> fetchLovData() {
        return unitService.fetchLovData();
    }

    public boolean validateUnitIdAndName(String unitId, String unitName) {
        return unitService.validateUnitIdAndName(unitId, unitName);
    }

    public String validateFields(PartDTO partDTO) {
        if (partDTO.getUnitId() == null || partDTO.getUnitName() == null) {
            return "Unit ID and Unit Name should not be null";
        }
        if (partDTO.getGroupId() == null || partDTO.getGroupName() == null) {
            return "Group ID and Group Name should not be null";
        }
        if (partDTO.getLineId() == null || partDTO.getLineDesc() == null) {
            return "Line ID and Line Description should not be null";
        }
        if (partDTO.getPartNo() == null || partDTO.getPartDesc() == null) {
            return "Part No and Part Description should not be null";
        }
        if (partDTO.getPartId() == null && partDTO.getGlobalParameter() == 1) {
            return "Part ID should not be null";
        }
        return null;
    }

    public boolean validatePartStatus(String partStatus) {
        return partRepository.findByPartStatus(partStatus).isPresent();
    }

    public boolean validateRequiredFields(PartDTO partDTO) {
        return partRepository.findByFields(partDTO).isPresent();
    }

    public boolean validateLineID(String lineID, String lineDesc, String unitID, String groupID) {
        return partRepository.validateLineID(lineID, lineDesc, unitID, groupID).isPresent();
    }

    public List<String> fetchLOVData(int globalParameter) {
        return partRepository.fetchLOVData(globalParameter);
    }

    public boolean validateGroupID(String groupID, String groupName, int globalParameter, String unitID) {
        return partRepository.validateGroupIDQuery(groupID, groupName, globalParameter, unitID).isPresent();
    }
}