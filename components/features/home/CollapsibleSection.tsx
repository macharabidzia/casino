import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

export function CollapsibleSection() {
  return (
    <div className="space-y-4 bg-dark-blue p-4 rounded-md">
      <p>
        CASINO is your premier online casino platform, offering a world-class
        gaming experience with hundreds of top-tier casino games, exclusive
        bonuses, and lightning-fast payouts. Whether you're a fan of classic
        slots, live dealer games, table games, or jackpot progressives, CASINO
        delivers everything you need for high-stakes excitement and non-stop fun
        — all from the comfort of your home or mobile device. CASINO is your
        premier online casino platform, offering a world-class gaming experience
        with hundreds of top-tier casino games, exclusive bonuses, and
        lightning-fast payouts. Whether you're a fan of classic slots, live
        dealer games, table games, or jackpot progressives, CASINO delivers
        everything you need for high-stakes excitement and non-stop fun — all
        from the comfort of your home or mobile device. CASINO is your premier
        online casino platform, offering a world-class gaming experience with
        hundreds of top-tier casino games, exclusive bonuses, and lightning-fast
        payouts. Whether you're a fan of classic slots, live dealer games, table
        games, or jackpot progressives, CASINO delivers everything you need for
        high-stakes excitement and non-stop fun — all from the comfort of your
        home or mobile device.
      </p>
      <Collapsible className="w-full">
        <CollapsibleContent className="text-sm">
          <p className="mb-4">
            Join thousands of players worldwide who trust CASINO for its secure,
            fair, and licensed gameplay. We partner with the industry's most
            reputable software providers to bring you an unbeatable selection of
            games with stunning graphics, realistic sound effects, and smooth
            play. From roulette and blackjack to immersive live casino tables
            and high-RTP video slots, CASINO is designed to satisfy both new
            players and seasoned pros.
          </p>
          <p>
            At CASINO, new users are greeted with a generous welcome bonus and
            ongoing promotions, cashback offers, free spins, and VIP rewards for
            loyal players. Our platform supports multiple payment options,
            including credit cards, cryptocurrencies, e-wallets, and bank
            transfers, all processed with the highest level of security and
            privacy. Our 24/7 customer support team ensures your questions are
            answered quickly — whenever you need assistance.
          </p>
        </CollapsibleContent>
        <CollapsibleTrigger asChild>
          <Button
            variant="default"
            className="justify-self-center gap-2 flex bg-light-blue cursor-pointer max-w-[250px] w-full h-[40px] mt-4"
          >
            <span>Read More</span>
          </Button>
        </CollapsibleTrigger>
      </Collapsible>
    </div>
  );
}
