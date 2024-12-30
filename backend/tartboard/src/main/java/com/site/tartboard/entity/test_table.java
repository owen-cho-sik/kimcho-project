package com.site.tartboard.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class test_table {
    @JsonProperty("id")
    private Integer id;
    
    @JsonProperty("cus_name")
    private String cus_name;
    
    @JsonProperty("cus_age")
    private Integer cus_age;
}

