<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <!-- brand logo -->
      <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" href="/">
          <i class="fas fa-check-circle"></i>
          Do it
        </a>
      </div>

      <!-- navbar toogle btn -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target=".dual-collapse2"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- navbar links -->
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Todos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Done todos</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
