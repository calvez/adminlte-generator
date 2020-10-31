<template>
    <div class="authincation section-padding">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-xl-5 col-md-6">
                    <div class="mini-logo text-center my-5">
                        <router-link to="/"><img src="/images/m_logo.png" alt=""></router-link>
                    </div>
                    <div class="auth-form card">

                        <div v-if="$slots['header']" class="card-header justify-content-center">
                            <slot name="header"/>
                        </div>

                        <div class="card-body">
                            <slot/>
                        </div>

                        <div v-if="$slots['footer']" class="card-footer justify-content-center">
                            <slot name="footer"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>