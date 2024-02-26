"use client";

import { useCallback } from "react";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => Promise<void>;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  label: string;
  disabled?: boolean;
};

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  label,
  disabled,
}: ModalProps) {
  // 閉じる
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [onClose, disabled]);

  // メインボタンのアクション
  const handleSubmit = useCallback(() => {
    console.log("from client side, handleSubmit", disabled)
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);
  
  if (!isOpen) {
    return undefined;
  }
  
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/50">
        <div className="relative mx-auto h-full w-full md:h-auto md:max-w-screen-sm">
          <div className="translate h-full duration-75">
            <div className="h-full bg-white shadow-lg md: rounded-lg text-black">
              {/** ヘッダー */}
              <div className="relative flex items-center justify-center border-b p-6">
                {/** 閉じる */}
                <div
                  className="absolute right-5 cursor-pointer rounded-full p-2 transition hover:bg-neutral-100"
                  onClick={handleClose}
                >
                  <IoMdClose size={20} />
                </div>
                {/** タイトル */}
                <div className="text-lg font-bold">{title}</div>
              </div>

              {/** 内容 */}
              <div className="relative flex-auto p-6">{body}</div>

              <div className="flex flex-col gap-2 px-6 pb-6">
                {/** ボタン */}
                <div className="flex w-full flex-row items-center gap-4">
                  {/** メインボタン */}
                  <button onClick={handleSubmit} className="p-2 m-2 bg-cyan-500 text-white rounded-lg">
                    {label}
                  </button>
                </div>
                {/** フッター */}
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
