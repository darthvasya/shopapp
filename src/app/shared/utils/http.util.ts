import { RequestOptions, Headers, URLSearchParams } from "@angular/http";
import { Injectable } from "@angular/core";

export class HttpUtil {

    static REQUEST_OPTIONS_WITH_CONTENT_TYPE_JSON = new RequestOptions({
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '**',
            'Access-Control-Allow-Methods': '**'
        })
    });
}