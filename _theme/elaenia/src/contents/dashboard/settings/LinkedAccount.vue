<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">Linked Account or Card</h4>
        </div>
        <div class="card-body">
            <div class="form">
                <ul class="linked_account">
                    <li>
                        <div class="row">
                            <div class="col-9">
                                <div class="media">
                                    <span class="mr-3"><i class="fa fa-bank"></i></span>
                                    <div class="media-body">
                                        <h5 class="mt-0 mb-1">Bank of America</h5>
                                        <p>Bank **************5421</p>
                                    </div>
                                    <div class="edit-option">
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-pencil"></i></a>
                                        <a href="#"><i class="fa fa-trash"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="verify">
                                    <div class="verified">
                                        <span><i class="la la-check"></i></span>
                                        <a href="#">Verified</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-9">
                                <div class="media my-4">
                                    <span class="mr-3"><i class="fa fa-cc-mastercard"></i></span>
                                    <div class="media-body">
                                        <h5 class="mt-0 mb-1">Master Card</h5>
                                        <p>Credit Card *********5478</p>
                                    </div>
                                    <div class="edit-option">
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-pencil"></i></a>
                                        <a href="#"><i class="fa fa-trash"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="verify">
                                    <div class="verified">
                                        <span><i class="la la-check"></i></span>
                                        <a href="#">Verified</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-9">
                                <div class="media">
                                    <span class="mr-3"><i class="fa fa-credit-card"></i></span>
                                    <div class="media-body">
                                        <h5 class="mt-0 mb-1">Debit Card</h5>
                                        <p>Prepaid Card *********5478</p>
                                    </div>
                                    <div class="edit-option">
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-pencil"></i></a>
                                        <a href="#"><i class="fa fa-trash"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="verify">
                                    <div class="not-verify">
                                        <span><i class="la la-close"></i></span>
                                        <a href="#">Not verified</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <div class="mt-5">
                    <router-link to="/dashboard/verify-step-5" class="btn btn-primary px-4 mr-3">Add Bank
                        Account</router-link>
                    <router-link to="/dashboard/verify-step-1" class="btn btn-success px-4">Add Debit
                        Account</router-link>
                </div>
            </div>
        </div>
    </div>
</template>