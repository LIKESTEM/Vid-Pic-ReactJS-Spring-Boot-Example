package com.thabiso.Vid_Pic_Bac.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class MfaVerificationRequest {
    private String username;
    private String mfaToken;
    // Getters and Setters
}