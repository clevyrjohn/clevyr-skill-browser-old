<script setup lang="ts">
import { useGapi } from 'vue-gapi'


const gapi = useGapi()

function login() {
    gapi.login().then(({ currentUser, gapi, hasGrantedScopes }) => {
    console.log({ currentUser, gapi, hasGrantedScopes })
    })
}

login();
</script>

<template>Hello</template>
