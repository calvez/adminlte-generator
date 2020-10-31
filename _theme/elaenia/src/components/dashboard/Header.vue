<template>
    <div class="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <nav class="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                        <router-link  to="/dashboard" class="navbar-brand"><img src="/images/w_logo.png" alt="">
                            <span>Elaenia</span></router-link>
                        <div class="dashboard_log my-2">
                            <div class="d-flex align-items-center">
                                <div class="account_money">
                                    <ul class="d-flex">
                                        <li class="crypto">
                                            <span>0.0025</span>
                                            <i class="cc BTC-alt"></i>
                                        </li>
                                        <li class="usd">
                                            <span>19.93 USD</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="profile_log dropdown">
                                    <div class="user" @click="show = !show">
                                        <span class="thumb"><i class="la la-user"></i></span>
                                        <span class="name">Maria Pascle</span>
                                        <span class="arrow"><i class="la la-angle-down"></i></span>
                                    </div>
                                    <div
                                        class="dropdown-menu dropdown-menu-right"
                                        :class="{show: show}"
                                        @click.capture="show = !show"
                                    >
                                        <router-link to="/dashboard/accounts" class="dropdown-item">
                                            <i class="la la-user"></i> Account
                                        </router-link>
                                        <router-link to="/dashboard/history" class="dropdown-item">
                                            <i class="la la-book"></i> History
                                        </router-link>
                                        <router-link to="/dashboard/settings" class="dropdown-item">
                                            <i class="la la-cog"></i> Setting
                                        </router-link>
                                        <router-link to="/lock" class="dropdown-item">
                                            <i class="la la-lock"></i> Lock
                                        </router-link>
                                        <router-link to="/sign-in" class="dropdown-item logout">
                                            <i class="la la-sign-out"></i> Logout
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>