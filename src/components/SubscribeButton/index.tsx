import { signIn, useSession } from "next-auth/react";
import { api } from "../../services/api";
import { getStripeJS } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}
export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();

  async function handleSubscribe() {
    if (!session) {
      alert("You must be logged in to subscribe");
      signIn("github");
      return;
    }
    // check out session
    // if logged in, subscribe
    try {
      const response = await api.post("/subscribe");
      const { sessionId } = response.data;
      const stripe = await getStripeJS();
      await stripe.redirectToCheckout({ sessionId: sessionId });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
