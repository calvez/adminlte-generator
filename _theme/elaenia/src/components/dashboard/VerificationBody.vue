<template>
    <div class="verification section-padding">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-xl-5 col-md-6">
                    <div class="auth-form card">

                        <div v-if="$slots['header']" class="card-header">
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