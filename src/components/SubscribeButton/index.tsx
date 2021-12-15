import { signIn, useSession } from "next-auth/react";
import { Router, useRouter } from "next/dist/client/router";
import { api } from "../../services/api";
import { getStripeJS } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}
export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();
  const router = useRouter();
  
  async function handleSubscribe() {
    if (!session) {
      alert("You must be logged in to subscribe");
      signIn("github");
      return;
    }
    
    if (session.userActiveSubscription) {
      router.push('/posts');
      return;
    }

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
