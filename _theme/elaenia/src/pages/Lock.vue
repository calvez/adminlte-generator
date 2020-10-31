<template>
    <form-page>
        <template #header>
            <h4 class="card-title">Locked</h4>
        </template>

        <form @submit.prevent="$router.push('dashboard')">
            <div class="form-group mb-4">
                <label>Enter Password</label>
                <input type="password" class="form-control"
                       placeholder="Password">
            </div>
            <button class="btn btn-success btn-block" type="submit">Unlock</button>
        </form>
        <div class="new-account text-center mt-3">
            <router-link class="text-primary" to="reset">
                <h5>Not Maria Pascle?</h5>
            </router-link>
        </div>
    </form-page>
</template>

<script>
    import formPage from '@app/components/FormPage.vue';

    export default {
        components: { formPage }
    }
</script>