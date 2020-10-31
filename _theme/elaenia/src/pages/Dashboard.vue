<template>
    <main-wrapper :is-loading="isLoading">
        <dashboard-header/>
        <sidebar/>
        <router-view name="dashboardPageTitle"/>
        <router-view/>
        <dashboard-footer/>
    </main-wrapper>
</template>

<script>
    import mainWrapper from "@app/components/MainWrapper.vue";
    import dashboardHeader from "@app/components/dashboard/Header.vue";
    import sidebar from "@app/components/dashboard/Sidebar.vue";
    import pageTitle from "@app/components/dashboard/PageTitle.vue";
    import dashboardFooter from "@app/components/dashboard/Footer.vue";
    import app from '@app/App.vue';

    export default {
        extends: app,
        components: {dashboardHeader, sidebar, mainWrapper, pageTitle, dashboardFooter},
    }
</script>