package com.example.tmm022.repository;

import com.example.tmm022.entity.Part;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartRepository extends JpaRepository<Part, String> {

    @Query("SELECT p FROM Part p WHERE p.partId = :partId AND p.unitId = :unitId AND p.groupId = :groupId AND p.lineId = :lineId")
    Part findPart(@Param("partId") String partId, @Param("unitId") String unitId, @Param("groupId") String groupId, @Param("lineId") String lineId);

    @Query("SELECT p.partNo FROM Part p WHERE (:globalParameter = 0 AND p.partStatus = 'A') OR (:globalParameter = 1 AND p.partStatus = 'E') ORDER BY p.partNo ASC")
    List<String> findPartNumbers(@Param("globalParameter") int globalParameter);

    @Query("SELECT COUNT(p) > 0 FROM Part p WHERE p.partNo = :partNo AND p.partDesc = :partDesc")
    boolean validatePartNumber(@Param("partNo") String partNo, @Param("partDesc") String partDesc);

    @Query("SELECT DISTINCT p.lineId, p.lineDesc FROM Part p WHERE p.unitId = :unitId AND p.groupId = :groupId AND p.lineId = :lineId AND p.lineDesc = :lineDesc")
    boolean validateLineID(@Param("lineId") String lineId, @Param("lineDesc") String lineDesc, @Param("unitId") String unitId, @Param("groupId") String groupId);

    @Query("SELECT DISTINCT p.lineId, p.lineDesc FROM Part p WHERE (:globalParameter = 0 AND p.lineStatus = 'A') OR (:globalParameter = 1 AND p.lineStatus = 'E') ORDER BY p.lineId ASC")
    List<Object[]> fetchLOVData(@Param("globalParameter") int globalParameter);

    @Query("SELECT COUNT(p) > 0 FROM Part p WHERE p.groupId = :groupId AND p.groupName = :groupName AND p.unitId = :unitId AND ((:globalParameter = 0 AND p.groupStatus = 'O') OR (:globalParameter = 1 AND p.groupStatus = 'E'))")
    boolean validateGroupIDQuery(@Param("groupId") String groupId, @Param("groupName") String groupName, @Param("globalParameter") int globalParameter, @Param("unitId") String unitId);
}