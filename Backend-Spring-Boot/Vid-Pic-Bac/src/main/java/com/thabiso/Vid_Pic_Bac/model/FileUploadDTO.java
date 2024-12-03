package com.thabiso.Vid_Pic_Bac.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class FileUploadDTO {
    private Long id;
    private String title;
    private String imageUrl;
    private String videoUrl;

    public FileUploadDTO(Long id, String title, String imageUrl, String videoUrl) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.videoUrl = videoUrl;
    }
}
