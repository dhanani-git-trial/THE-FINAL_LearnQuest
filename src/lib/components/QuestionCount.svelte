<svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/boosted@5.2.3/dist/css/orange-helvetica.min.css" rel="stylesheet" integrity="sha384-A0Qk1uKfS1i83/YuU13i2nx5pk79PkIfNFOVzTcjCMPGKIDj9Lqx9lJmV7cdBVQZ" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/boosted@5.2.3/dist/css/boosted.min.css" rel="stylesheet" integrity="sha384-zYFw+mxKy6r9zpAc1NoGiYBfQmxfvg7ONEMr81WeU+WLPPaLC9QTrNGFJTBi3EIn" crossorigin="anonymous">
</svelte:head>


<div class="input-group quantity-selector">
    <input type="number" id="inputQuantitySelector" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
    <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector" data-bs-step="down">
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector" data-bs-step="up">
      <span class="visually-hidden">Step up</span>
    </button>
  </div>