package com.tkb.backend.controller;

import com.tkb.backend.dto.SubjectGroupRequest;
import com.tkb.backend.service.TimetableService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/timetable")
@CrossOrigin(origins = "*")
public class TimetableController {

    private final TimetableService service;

    public TimetableController(TimetableService service) {
        this.service = service;
    }

    // 🔥 ĐỔI TÊN ENDPOINT THÀNH run-ga
@PostMapping("/run-ga")
public ResponseEntity<?> generate(
        @RequestBody SubjectGroupRequest request) {

    return ResponseEntity.ok(
            service.generate(request)
    );
}
}