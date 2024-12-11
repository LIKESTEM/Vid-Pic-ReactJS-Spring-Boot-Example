package com.thabiso.Vid_Pic_Bac.repo;

import com.thabiso.Vid_Pic_Bac.model.FileUpload;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileUploadRepo extends JpaRepository<FileUpload, Long> {
}
