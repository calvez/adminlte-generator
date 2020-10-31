<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">Security</h4>
        </div>
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-xl-4">
                    <div class="id_card">
                        <img src="/images/id.png" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="id_info">
                        <h3>Maria Pascle </h3>
                        <p class="mb-1 mt-3">ID: 0024 5687 2254 3698 </p>
                        <p class="mb-1">Status: <span class="font-weight-bold">Verified</span></p>
                        <router-link to="/dashboard/verify-step-2" class="btn btn-success mt-3">New ID</router-link>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-12">
                    <div class="phone_verify">
                        <h4 class="card-title mb-3">Email Address</h4>
                        <form @submit.prevent="$router.push('/otp-2')">
                            <div class="form-row align-items-center">
                                <div class="form-group col-xl-6">
                                    <input type="text" class="form-control"
                                           placeholder="hello@example.com ">
                                    <button class="btn btn-success mt-4">Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="phone_verified">
                        <h5> <span><i class="fa fa-envelope"></i></span> hello@example.com</h5>
                        <div class="verify">
                            <div class="verified">
                                <span><i class="la la-check"></i></span>
                                <a href="#">Verified</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="phone_verify">
                        <h4 class="card-title mb-3">Add Phone Number</h4>
                        <form @submit.prevent="$router.push('/otp-2')">
                            <div class="form-row align-items-center">
                                <div class="form-group col-xl-6">
                                    <input type="text" class="form-control"
                                           placeholder="+1 2335 2458 ">
                                    <button class="btn btn-success mt-4">Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="phone_verified">
                        <h5> <span><i class="fa fa-phone"></i></span> +1 23584 2659</h5>
                        <div class="verify">
                            <div class="verified">
                                <span><i class="la la-check"></i></span>
                                <a href="#">Verified</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>