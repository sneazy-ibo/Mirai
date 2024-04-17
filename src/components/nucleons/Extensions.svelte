<script lang="ts">
  import extensionData from '../../data/extensionData.json';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { CloudDownloadIcon } from '@indaco/svelte-iconoir/cloud-download';

  interface ExtensionItem {
    name: string;
    type: string;
    language: string;
    version: string;
    iconSrc: string;
    downloadHref: string;
  }
  const extensionItems: ExtensionItem[] = extensionData;

  let selectedItem: ExtensionItem | null = null;

  function showPopup(item: ExtensionItem) {
    selectedItem = item;
  }

  function hidePopup() {
    selectedItem = null;
  }

  const ItemCount: ExtensionItem[] = extensionData.slice(0, 96);

  const imageUrls: string[] = ItemCount.map(item => item.iconSrc);

  function handleOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.popup')) {
      hidePopup();
    }
  }

  onMount(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });
</script>

<div class="gallery">
  <div class="gallery__inner">
    {#each imageUrls as imageUrl, index}
      <button class="image-container" on:click|stopPropagation={() => showPopup(extensionItems[index])}>
        <img src={imageUrl} alt="Icon" />
      </button>
    {/each}
  </div>
  {#if selectedItem}
  <div class="popup" transition:fade>
    <div class="popup-content">
      <p style="
      font-size: 200%;
      padding-bottom: 12px; 
      text-shadow: 0 0 2px #FFF;">{selectedItem.name}</p>
      <p class="extension-info">Type: {selectedItem.type}</p>
      <p class="extension-info">Language: {selectedItem.language}</p>
      <p class="extension-info">Version: {selectedItem.version}</p>
    </div>
    <a href={selectedItem.downloadHref} target="_blank" rel="noopener noreferrer" class="download-button">
      <CloudDownloadIcon color="#FFBFFF" size="48" />
    </a>
  </div>
  {/if}
</div>

<style lang="scss">
  @import '../../styles/mixins.scss';

  .gallery {
    max-width: 1000px;
    margin: auto;
    display: flex;
    justify-content: center;
    overflow: hidden; 
  }

  img {
  position: static;
  }

  img:hover {
    outline: none;
  }

  .image-container {
    width: 50px;
    height: auto;
    background-color: #FFBEFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border: 2px solid var(--dantotsu-3);
    border-radius: 8px;
    margin: 5px;
    display: inline-block;
    padding: 2px;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .image-container img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .image-container:hover {
    transform: scale(1.1);
  }

  .image-container:active {
    transform: scale(0.8);
  }

  .popup {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width:25em;
    height: 3em;
    margin-top: 25em;
    position: absolute;
    background-color: #ffbeff;
    padding-top: 1em;
    padding-left: 2em;
    border-radius: 0 0 25px 25px;
    box-shadow: 0 0 150px rgba(255, 190, 255, 0.7);
    
    .popup-content {
      margin-top: -0.9em;
      flex-grow: 1;
    }
    .extension-info {
      @include text-glow(#FFBFFF, 1, 9px, 11px);
    }
    p {
      font-weight: bold;
      @include text-gradient(0deg, (#FFF 0%, #FFF 100%));
    }
  
  .download-button {
    margin-top: -4em;
    margin-right: 4em;
    align-self: flex-end;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    filter: drop-shadow(0 0 5px #FFBFFF);
  }
  .download-button:hover {
    scale: 1.05;
  }
}

</style>
