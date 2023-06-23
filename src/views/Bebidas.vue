<script setup></script>

<template>
  <div class="page">
    <div class="header">
      <h1>Bebidas</h1>
      <p>As Melhores bebidas</p>
      <div class="categories">
        <span class="category">Wiskey</span>
        <span class="category">Vinhos</span>
        <span class="category">Drinks</span>
        <span class="category">Sem Alcool</span>
        <span class="category">Gins</span>
        <span class="category">Vodka</span>
        <span class="category">Pinga</span>
      </div>
    </div>

    <main class="main">

      <div class="card">
        <div class="image">
          <img class="img" src="../assets/img/whisky1.jpg" alt="wiskey" />
        </div>
        <div class="content">
          <h3 class="name">Jack Daniels RYE</h3>
          <p class="price">R$ 222,00</p>
          <p class="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="image">
          <img class="img" src="../assets/img/whisky2.jpg" alt="wiskey" />
        </div>
        <div class="content">
          <h3 class="name">Jack Daniels FIRE</h3>
          <p class="price">R$ 138,00</p>
          <p class="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="image">
          <img class="img" src="../assets/img/whisky3.jpg" alt="wiskey" />
        </div>
        <div class="content">
          <h3 class="name">Gentleman JACK</h3>
          <p class="price">R$ 189,05</p>
          <p class="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

    </main>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 24px 0;
}

.header h1 {
  font-size: 3rem;
  padding: 0 24px;
  line-height: 1;
}
.header p {
  font-size: 1.4rem;
  color: var(--palette-0-5);
  font-weight: 400;
  padding: 0 24px;
  line-height: 1;
}

.categories {
  margin-top: 16px;
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  padding: 0 0 0 24px;
}
.category {
  font-size: 1.4rem;
  width: fit-content;
  white-space: pre;
  font-weight: 600;
  background-color: var(--palette-0-3);
  color: var(--palette-4);
  padding: 4px 16px;
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  margin-right: 12px;
}

.main {
  width: 100%;
  max-width: var(--width-layout);
  min-height: 300px;
  max-height: 300px;

  display: flex;
  gap: 4px;

  overflow-y: hidden;
  overflow-x: auto;
  scroll-behavior: smooth;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  max-width: 280px;
  min-width: 280px;
}

.card .image {
  position: absolute;
  top: 6px;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 6px var(--palette-0-4);
}
.card .img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.content {
  background-color: var(--palette-0-2);
  box-shadow: 0 0 12px var(--palette-0-1);
  border-radius: 12px;

  margin-top: 30px;
  margin-bottom: 4px;
  padding-bottom: 24px;

  max-width: 260px;
  min-width: 260px;

  padding-top: 118px;
  text-align: center;
}

.content .name {
  color: var(--palette-4);
  margin-top: 24px;
  font-size: 2.2rem;
}

.content .price {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--palette-0-3);
}
.content .description {
  margin-top: 12px;
  font-size: 1.4rem;
  padding: 0 24px;
}
</style>
