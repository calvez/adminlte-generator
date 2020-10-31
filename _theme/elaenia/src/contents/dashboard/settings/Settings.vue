<template>
    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-3 col-md-4">
                    <div class="card settings_menu">
                        <div class="card-header">
                            <h4 class="card-title">Settings</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li class="nav-item">
                                    <router-link to="/dashboard/settings" class="nav-link">
                                        <i class="la la-user"></i>
                                        <span>Edit Profile</span>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/dashboard/settings/preferences" class="nav-link">
                                        <i class="la la-cog"></i>
                                        <span>Preferences</span>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/dashboard/settings/security" class="nav-link">
                                        <i class="la la-lock"></i>
                                        <span>Security</span>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/dashboard/settings/linked-account" class="nav-link">
                                        <i class="la la-university"></i>
                                        <span>Linked Account</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 col-md-8">

                    <router-view/>

                </div>
            </div>
        </div>
    </div>
</template>