<template>
    <div class="page_title pt-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-sm-6 col-6">
                    <div class="page_title-content">
                        <p>Last updated: October 21, 2019</p>
                    </div>
                </div>
                <div class="col-xl-6 col-sm-6 col-6 text-sm-left">
                    <ul class="text-right breadcrumbs list-unstyle">
                        <li class="active"><a href="#">{{ title }}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import app from '@app/App.vue';

    export default {
        extends: app
    }
</script>