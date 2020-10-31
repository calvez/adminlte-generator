import demo from '@app/pages/Demo.vue';
import landing from '@app/pages/Landing.vue';
import dashboard from '@app/pages/Dashboard.vue';
import signIn from '@app/pages/SignIn.vue';
import signUp from '@app/pages/SignUp.vue';
import reset from '@app/pages/Reset.vue';
import lock from '@app/pages/Lock.vue';
import oneTimePassword1 from '@app/pages/OneTimePassword1.vue';
import oneTimePassword2 from '@app/pages/OneTimePassword2.vue';
import buySell from '@app/contents/dashboard/BuySell.vue';
import home from '@app/contents/dashboard/Home.vue';
import dashboardPageTitle from '@app/components/dashboard/PageTitle.vue';
import addBankAcc from '@app/contents/dashboard/AddBankAcc.vue';
import accounts from '@app/contents/dashboard/Accounts.vue';
import history from '@app/contents/dashboard/History.vue';
import termCondition from '@app/contents/landing/TermCondition.vue';
import privacyPolicy from '@app/contents/landing/PrivacyPolicy.vue';
import landingIntro from '@app/contents/landing/Intro.vue';
import market from '@app/contents/landing/Market.vue';
import features from '@app/contents/landing/Features.vue';
import portfolio from '@app/contents/landing/Portfolio.vue';
import testimonial from '@app/contents/landing/Testimonial.vue';
import contact from '@app/contents/landing/Contact.vue';
import landingPageTitle from '@app/components/landing/PageTitle.vue';
import about from '@app/contents/landing/About.vue';
import settings from '@app/contents/dashboard/settings/Settings.vue';
import profile from '@app/contents/dashboard/settings/Profile.vue';
import preferences from '@app/contents/dashboard/settings/Preferences.vue';
import security from '@app/contents/dashboard/settings/Security.vue';
import linkedAccount from '@app/contents/dashboard/settings/LinkedAccount.vue';
import verifyStep1 from '@app/contents/dashboard/VerifyStep1.vue';
import verifyStep2 from '@app/contents/dashboard/VerifyStep2.vue';
import verifyStep3 from '@app/contents/dashboard/VerifyStep3.vue';
import verifyStep4 from '@app/contents/dashboard/VerifyStep4.vue';
import verifyStep5 from '@app/contents/dashboard/VerifyStep5.vue';
import verifyStep6 from '@app/contents/dashboard/VerifyStep6.vue';
import addDebitCard from '@app/contents/dashboard/AddDebitCard.vue';
import demoIntro from '@app/contents/demo/Intro.vue';
import pages from '@app/contents/demo/Pages.vue';
import support from '@app/contents/demo/Support.vue';

export default [
    { path: '*', redirect: '/' },

    { path: '/', component: landing, children: [
        { path: '', components: { landingIntro, market, features, portfolio, testimonial, contact }},
        { path: 'about', meta: {title: 'About Us'}, components: { pageTitle: landingPageTitle, about }},
        { path: 'terms-of-service', meta: {title: 'Terms & Condition'}, components: { pageTitle: landingPageTitle, termCondition }},
        { path: 'privacy-policy', meta: {title: 'Privacy Policy'}, components: { pageTitle: landingPageTitle, privacyPolicy }},
    ]},

    { path: '/demo', component: demo, children: [
        { path: '', meta: {title: 'Demo'}, components: { demoIntro, pages, support }},
    ]},

    { path: '/sign-in', meta: {title: 'Sign-In'}, component: signIn },
    { path: '/sign-up', meta: {title: 'Sign-Up'}, component: signUp },
    { path: '/reset', meta: {title: 'Reset Password'}, component: reset },
    { path: '/otp-1', meta: {title: 'OTP Number'}, component: oneTimePassword1 },
    { path: '/otp-2', meta: {title: 'OTP Code'}, component: oneTimePassword2 },
    { path: '/lock', meta: {title: 'Locked'}, component: lock },

    { path: '/dashboard', component: dashboard, children: [
        { path: '', redirect: 'home' },
        { path: 'home', meta: {title: 'Dashboard'}, components: {default: home, dashboardPageTitle} },
        { path: 'buy-sell', meta: {title: 'Exchange'}, components: {default: buySell, dashboardPageTitle} },
        { path: 'accounts', meta: {title: 'Accounts'}, components: {default: accounts, dashboardPageTitle} },
        { path: 'history', meta: {title: 'History'}, components: {default: history, dashboardPageTitle} },
        { path: 'add-bank-acc', meta: {title: 'Add Bank Account'}, component: addBankAcc },
        { path: 'add-debit-card', meta: {title: 'Add Debit Card'}, component: addDebitCard },
        { path: 'verify-step-1', meta: {title: 'Verify ID'}, component: verifyStep1 },
        { path: 'verify-step-2', meta: {title: 'Upload ID'}, component: verifyStep2 },
        { path: 'verify-step-3', meta: {title: 'ID Verifying...'}, component: verifyStep3 },
        { path: 'verify-step-4', meta: {title: 'ID Verified'}, component: verifyStep4 },
        { path: 'verify-step-5', meta: {title: 'Recommendation'}, component: verifyStep5 },
        { path: 'verify-step-6', meta: {title: 'Success'}, component: verifyStep6 },

        { path: 'settings', components: {default: settings, dashboardPageTitle}, children: [
            { path: '', meta: {title: 'Edit Profile'}, component: profile },
            { path: 'preferences', meta: {title: 'Preferences'}, component: preferences },
            { path: 'security', meta: {title: 'Security'}, component: security },
            { path: 'linked-account', meta: {title: 'Linked Account'}, component: linkedAccount },
        ]},
    ]}
];