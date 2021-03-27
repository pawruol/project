<?php

namespace Welcome\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        // \Welcome\Http\Middleware\TrustHosts::class,
        \Welcome\Http\Middleware\TrustProxies::class,
        \Fruitcake\Cors\HandleCors::class,
        \Welcome\Http\Middleware\PreventRequestsDuringMaintenance::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \Welcome\Http\Middleware\TrimStrings::class,
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            \Welcome\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            // \Illuminate\Session\Middleware\AuthenticateSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \Welcome\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],

        'api' => [
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,

            \Welcome\Http\Middleware\ForceJsonResponse::class,
            \Welcome\Http\Middleware\Cors::class,
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \Welcome\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Welcome\Middleware\AuthenticateWithBasicAuth::class,
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
        'can' => \Illuminate\Welcome\Middleware\Authorize::class,
        'guest' => \Welcome\Http\Middleware\RedirectIfAuthenticated::class,
        'password.confirm' => \Illuminate\Welcome\Middleware\RequirePassword::class,
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'verified' => \Illuminate\Welcome\Middleware\EnsureEmailIsVerified::class,

        'json.response' => \Welcome\Http\Middleware\ForceJsonResponse::class,
        'cors' => \Welcome\Http\Middleware\Cors::class,
        'admin.api' => \Welcome\Http\Middleware\AdminAuth::class,
        'superAdmin.api' => \Welcome\Http\Middleware\SuperAdminAuth::class,
    ];
}
