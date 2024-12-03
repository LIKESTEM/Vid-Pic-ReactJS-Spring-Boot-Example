package com.thabiso.Vid_Pic_Bac.controller;

import com.thabiso.Vid_Pic_Bac.model.FileUploadDTO;
import com.thabiso.Vid_Pic_Bac.service.FileUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/files")
@CrossOrigin(origins = "http:localhost:3000")
public class FileUploadController {

    @Autowired
    private FileUploadService fileUploadService;

    @PostMapping("upload")
    public ResponseEntity<String> uploadFile(
            @RequestParam("title") String title,
            @RequestParam("image") MultipartFile image,
            @RequestParam("video") MultipartFile video
    ) throws Exception {
        byte[] imageBytes = image.getBytes();
        byte[] videoBytes = video.getBytes();

        return fileUploadService.saveFile(
                title,
                imageBytes,
                videoBytes
        );
    }

    @GetMapping
    public List<FileUploadDTO> getAllFiles() {
        return fileUploadService.getAllFiles();
    }

    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getImage(
            @PathVariable Long id
    ) {
        byte[] image = fileUploadService.getImage(id);
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(image);
    }

    @GetMapping("/{id}/video")
    public ResponseEntity<byte[]> getVideo(
            @PathVariable Long id
    ) {
        byte[] video = fileUploadService.getVideo(id);
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(video);
    }
}
