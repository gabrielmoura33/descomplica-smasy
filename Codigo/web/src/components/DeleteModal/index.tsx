/* eslint-disable react/display-name */
import React from 'react';
import styles from './delete-modal.module.scss';

interface DeleteModalProps {
  isVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  handleDelete: () => void;
}
function DeleteModal({
  setModalVisible,
  isVisible,
  handleDelete,
}: DeleteModalProps) {
  if (!isVisible) return <></>;
  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
        <TrashIcon></TrashIcon>
        <span>Deseja deletar este item?</span>

        <div className={styles['buttons-group']}>
          <button
            className={styles['button-secondary']}
            type="submit"
            onClick={() => setModalVisible(false)}
          >
            Cancelar
          </button>
          <button
            className={styles.button}
            type="submit"
            onClick={handleDelete}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

function TrashIcon() {
  return (
    <svg
      width="154"
      height="154"
      viewBox="0 0 154 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M77.0002 154C119.526 154 154 119.526 154 77C154 34.4741 119.526 0 77.0002 0C34.4743 0 0.000183105 34.4741 0.000183105 77C0.000183105 119.526 34.4743 154 77.0002 154Z"
        fill="#F6F6F6"
      />
      <path
        d="M104.866 115.389C104.903 116.096 104.666 116.791 104.203 117.327C103.741 117.863 103.089 118.2 102.384 118.268C94.0702 119.447 85.9582 118.539 77.6382 118.154C68.7562 117.744 59.8472 117.493 50.9562 117.471C50.3658 117.508 49.7807 117.339 49.3013 116.993C48.8218 116.646 48.4778 116.143 48.3282 115.571C38.6202 116.896 32.4522 118.871 32.4522 121.084C32.4522 125.074 52.5202 128.308 77.2752 128.308C102.03 128.308 122.099 125.074 122.099 121.084C122.099 118.768 115.351 116.712 104.866 115.389Z"
        fill="#D8D8D8"
      />
      <path
        d="M99.0541 121.08H53.636C49.378 121.08 45.121 117.355 45.121 113.097L41.4771 59.545L41.6771 58.618C42.0869 58.0346 42.6278 57.5553 43.2562 57.2186C43.8847 56.8818 44.5833 56.697 45.296 56.679C45.9669 56.9387 46.536 57.408 46.9185 58.0172C47.3011 58.6265 47.4766 59.3429 47.4191 60.06L47.4371 61.136L50.618 113.097C50.7107 114.006 51.1493 114.844 51.8428 115.438C52.5364 116.033 53.4319 116.338 54.3441 116.29H100.823C102.423 116.29 104.016 114.69 104.549 113.097L107.21 60.937L107.103 59.437C107.017 58.9886 107.064 58.5248 107.239 58.103C107.413 57.6811 107.708 57.3195 108.085 57.0629C108.463 56.8063 108.907 56.6659 109.364 56.659C109.82 56.652 110.269 56.7789 110.654 57.024C111.23 57.3342 111.71 57.7967 112.041 58.361C112.372 58.9253 112.542 59.5698 112.532 60.224V60.944L109.432 111.562C109.361 112.776 109.041 113.962 108.492 115.047C106.617 118.731 103.623 121.08 99.0541 121.08Z"
        fill="#00e78e"
      />
      <path
        d="M110.265 61.4489H43.7354C42.7912 61.4862 41.8491 61.3366 40.963 61.0087C40.0768 60.6807 39.2642 60.181 38.5719 59.538C37.8795 58.8951 37.321 58.1217 36.9284 57.2622C36.5359 56.4027 36.317 55.4742 36.2844 54.5299V47.0789C36.2604 46.0938 36.4367 45.1142 36.8027 44.1994C37.1686 43.2845 37.7166 42.4536 38.4134 41.7568C39.1101 41.0601 39.941 40.5121 40.8559 40.1462C41.7707 39.7802 42.7503 39.6039 43.7354 39.6279H110.797C112.622 39.6602 114.363 40.3996 115.654 41.6902C116.945 42.9808 117.684 44.722 117.716 46.5469V54.5299C117.535 56.3946 116.676 58.1281 115.304 59.403C113.931 60.6778 112.138 61.4056 110.265 61.4489ZM43.7354 44.9489C43.1832 44.9863 42.6633 45.2225 42.2719 45.6137C41.8804 46.0049 41.6441 46.5248 41.6064 47.0769V54.5279C41.6438 55.0802 41.8801 55.6002 42.2716 55.9917C42.663 56.3831 43.1831 56.6195 43.7354 56.6569H110.797C111.35 56.6192 111.87 56.3828 112.261 55.9914C112.652 55.6 112.889 55.0801 112.926 54.5279V54.5279V47.0769C112.889 46.5248 112.652 46.0049 112.261 45.6137C111.869 45.2225 111.35 44.9863 110.797 44.9489H43.7344H43.7354Z"
        fill="#00e78e"
      />
      <path
        d="M88.8952 40.87C88.2042 40.8253 87.553 40.5305 87.0633 40.0409C86.5736 39.5512 86.2789 38.9 86.2342 38.209V35.016C86.266 34.7985 86.2465 34.5766 86.1773 34.368C86.1081 34.1594 85.9912 33.9698 85.8358 33.8144C85.6804 33.659 85.4908 33.5421 85.2822 33.4729C85.0736 33.4037 84.8517 33.3842 84.6342 33.416H68.3103C68.0928 33.3842 67.8709 33.4037 67.6622 33.4729C67.4536 33.5421 67.2641 33.659 67.1087 33.8144C66.9533 33.9698 66.8364 34.1594 66.7672 34.368C66.698 34.5766 66.6785 34.7985 66.7102 35.016V35.016V38.2079C66.7317 38.563 66.6776 38.9185 66.5514 39.2511C66.4253 39.5837 66.23 39.8857 65.9785 40.1372C65.727 40.3887 65.4249 40.584 65.0924 40.7101C64.7598 40.8363 64.4043 40.8904 64.0492 40.869C63.6935 40.8945 63.3365 40.8431 63.0025 40.7183C62.6684 40.5935 62.3651 40.3982 62.1133 40.1458C61.8615 39.8933 61.667 39.5895 61.5431 39.2551C61.4192 38.9207 61.3687 38.5636 61.3952 38.2079V35.015C61.4276 33.19 62.1669 31.4489 63.4575 30.1583C64.7482 28.8676 66.4893 28.1283 68.3142 28.0959H85.1682C86.9932 28.1283 88.7343 28.8676 90.0249 30.1583C91.3155 31.4489 92.0549 33.19 92.0872 35.015V38.2079C91.5512 39.2729 90.4872 40.87 88.8952 40.87Z"
        fill="#00e78e"
      />
      <path
        d="M62.463 105.313C60.863 105.313 59.27 104.249 59.27 103.184V72.4919C59.3468 71.8595 59.6685 71.2824 60.166 70.8844C60.6635 70.4864 61.2971 70.2992 61.931 70.3629C63.531 70.3629 64.592 70.8949 64.592 72.4919V103.184C65.125 104.249 63.528 105.313 62.463 105.313Z"
        fill="#00e78e"
      />
      <path
        d="M77.4159 105.313C76.782 105.377 76.1483 105.19 75.6508 104.792C75.1534 104.394 74.8317 103.816 74.7549 103.184V72.4919C74.8317 71.8595 75.1534 71.2824 75.6508 70.8844C76.1483 70.4864 76.782 70.2992 77.4159 70.3629C79.0159 70.3629 80.0759 70.8949 80.0759 72.4919V103.184C80.0769 104.249 78.4839 105.313 77.4159 105.313Z"
        fill="#00e78e"
      />
      <path
        d="M91.8382 105.313C91.2043 105.377 90.5707 105.19 90.0732 104.792C89.5758 104.394 89.2541 103.816 89.1772 103.184V72.4919C89.2541 71.8595 89.5758 71.2824 90.0732 70.8844C90.5707 70.4864 91.2043 70.2992 91.8382 70.3629C93.4382 70.3629 94.4992 70.8949 94.4992 72.4919V103.184C95.0322 104.249 93.4352 105.313 91.8382 105.313Z"
        fill="#00e78e"
      />
    </svg>
  );
}

export { DeleteModal };
