// utils/SoundPlayer.js

import { Audio } from 'expo-av';

export default class SoundPlayer {
  constructor() {
    this.sound = new Audio.Sound();
  }

  async loadSound(file, isLooping = false) {
    try {
      await this.sound.loadAsync(file);
      await this.sound.setIsLoopingAsync(isLooping);
    } catch (error) {
      console.log(error);
    }
  }

  async playSound() {
    try {
      await this.sound.playAsync();
    } catch (error) {
      console.log(error);
    }
  }

  async setVolumeAsync(volume) {
    try {
      await this.sound.setVolumeAsync(volume);
    } catch (error) {
      console.log(error);
    }
  }

  unloadSound() {
    this.sound.unloadAsync();
  }
}
