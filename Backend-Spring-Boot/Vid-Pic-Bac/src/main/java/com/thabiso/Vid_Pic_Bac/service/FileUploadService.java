package com.thabiso.Vid_Pic_Bac.service;

import com.thabiso.Vid_Pic_Bac.model.FileUpload;
import com.thabiso.Vid_Pic_Bac.model.FileUploadDTO;
import com.thabiso.Vid_Pic_Bac.repo.FileUploadRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FileUploadService {

    @Autowired
    private FileUploadRepo fileUploadRepo;

    public ResponseEntity<String> saveFile(
            String title,
            byte[] imageBytes,
            byte[] videoBytes
    ) {
        FileUpload fileUpload = new FileUpload(title, imageBytes, videoBytes);
        fileUploadRepo.save(fileUpload);
        return new ResponseEntity<>(
                "The files have been persisted successfully!",
                HttpStatus.CREATED
        );
    }

    public List<FileUploadDTO> getAllFiles() {
        return fileUploadRepo.findAll().stream().map(file -> {
            FileUploadDTO dto = new FileUploadDTO();
            dto.setId(file.getId());
            dto.setTitle(file.getTitle());
            dto.setImageUrl("/api/files/" + file.getId() + "/image");
            dto.setVideoUrl("/api/files/" + file.getId() + "/video");
            return dto;
        }).collect(Collectors.toList());
    }

    public byte[] getImage(Long id) {
        return fileUploadRepo.findById(id).get().getImage();
    }

    public byte[] getVideo(Long id) {
        return fileUploadRepo.findById(id).get().getVideo();
    }
}
