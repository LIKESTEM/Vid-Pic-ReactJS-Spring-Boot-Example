package com.thabiso.Vid_Pic_Bac.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
@Table(name = "file_upload")
public class FileUpload {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Lob
    private byte[] image;

    @Lob
    private byte[] video;

    public FileUpload(String title, byte[] image, byte[] video) {
        this.title = title;
        this.image = image;
        this.video = video;
    }
}
