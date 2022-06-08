import styles from "./subscribebutton.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button type="button" className={styles.subscribeBtn}>
      Subscribe now
    </button>
  );
}
