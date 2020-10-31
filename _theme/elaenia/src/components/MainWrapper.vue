<template>
    <div id="main-wrapper" :class="{show: !isLoading}">
        <slot/>
    </div>
</template>

<script>
    export default {
        props: ['isLoading']
    }
</script>