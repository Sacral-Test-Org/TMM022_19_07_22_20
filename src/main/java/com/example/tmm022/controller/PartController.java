package com.example.tmm022.controller;

import com.example.tmm022.service.PartService;
import com.example.tmm022.dto.PartDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/parts")
public class PartController {

    @Autowired
    private PartService partService;

    @GetMapping("/exists")
    public ResponseEntity<Boolean> checkPartExists(@RequestParam String partId, @RequestParam String unitId, @RequestParam String groupId, @RequestParam String lineId) {
        boolean exists = partService.checkPartExists(partId, unitId, groupId, lineId);
        return ResponseEntity.ok(exists);
    }

    @PostMapping("/save")
    public ResponseEntity<Void> savePart(@RequestBody PartDTO partDTO) {
        partService.savePart(partDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update")
    public ResponseEntity<Void> updatePart(@RequestBody PartDTO partDTO) {
        partService.updatePart(partDTO);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/lookup")
    public ResponseEntity<List<String>> lookupPartNumber(@RequestParam int globalParameter) {
        List<String> partNumbers = partService.lookupPartNumber(globalParameter);
        return ResponseEntity.ok(partNumbers);
    }

    @GetMapping("/validate/part-number")
    public ResponseEntity<Boolean> validatePartNumber(@RequestParam String partNumber, @RequestParam String partDescription) {
        boolean isValid = partService.validatePartNumber(partNumber, partDescription);
        return ResponseEntity.ok(isValid);
    }

    @GetMapping("/lov-data")
    public ResponseEntity<List<String>> getLovData() {
        List<String> lovData = partService.fetchLovData();
        return ResponseEntity.ok(lovData);
    }

    @PostMapping("/validate/fields")
    public ResponseEntity<List<String>> validatePartFields(@RequestBody PartDTO partDTO) {
        List<String> validationMessages = partService.validateFields(partDTO);
        return ResponseEntity.ok(validationMessages);
    }

    @GetMapping("/validate/part-status")
    public ResponseEntity<Boolean> validatePartStatus(@RequestParam String partStatus) {
        boolean isValid = partService.validatePartStatus(partStatus);
        return ResponseEntity.ok(isValid);
    }

    @PostMapping("/validate/required-fields")
    public ResponseEntity<List<String>> validateRequiredFields(@RequestBody PartDTO partDTO) {
        List<String> validationMessages = partService.validateRequiredFields(partDTO);
        return ResponseEntity.ok(validationMessages);
    }

    @GetMapping("/validate/line-id")
    public ResponseEntity<Boolean> validateLineID(@RequestParam String lineID, @RequestParam String lineDesc, @RequestParam String unitID, @RequestParam String groupID) {
        boolean isValid = partService.validateLineID(lineID, lineDesc, unitID, groupID);
        return ResponseEntity.ok(isValid);
    }

    @GetMapping("/fetch-lov-data")
    public ResponseEntity<List<String>> fetchLOVData(@RequestParam int globalParameter) {
        List<String> lovData = partService.fetchLOVData(globalParameter);
        return ResponseEntity.ok(lovData);
    }

    @GetMapping("/validate/group-id")
    public ResponseEntity<Boolean> validateGroupID(@RequestParam String groupID, @RequestParam String groupName, @RequestParam int globalParameter, @RequestParam String unitID) {
        boolean isValid = partService.validateGroupID(groupID, groupName, globalParameter, unitID);
        return ResponseEntity.ok(isValid);
    }
}