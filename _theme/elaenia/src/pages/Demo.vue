<template>
    <main-wrapper :is-loading="isLoading">
        <demo-header/>

        <router-view name="demoIntro"/>
        <router-view name="pages"/>
        <router-view name="support"/>

        <demo-footer/>
    </main-wrapper>
</template>

<script>
    import mainWrapper from '@app/components/MainWrapper.vue';
    import demoHeader from "@app/components/demo/Header.vue";
    import demoFooter from '@app/components/demo/Footer.vue';
    import app from '@app/App.vue';

    export default {
        extends: app,
        components: { mainWrapper, demoHeader, demoFooter },
    }
</script>