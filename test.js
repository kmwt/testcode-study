'use strict';

/**
 * 仮想クライアントモデル
 */
class ClientTest {

    constructor(id) {
        this.id = id;
        this.video = document.getElementById(id);
    }

    /**
     * 再生ボタンのテスト
     */
    TestPlayButton() {
        const play_button = document.getElementById(id + "-button");
        const isPousedBefore = this.video.paused;
        play_button.onpointerdown();
        const isPousedAfter = this.video.paused;

        console.assert(
            isPousedBefore === !isPousedAfter,
            '再生/停止制御が正しくありません'
        );
    }

    /**
     * 音量バーのテスト
     */
    TestVolumeButton() {
        const play_button = document.getElementById(id + "-button");
        // TODO: test
    }
}