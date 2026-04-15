export function WhySection() {
  return (
    <section className="px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1600px] gap-10 border-y border-white/8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-3 text-[11px] uppercase tracking-[0.36em] text-orange-300/75">
            Why WAOC Exists
          </div>
          <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            In a fragmented world, trust and coordination do not emerge automatically.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            [
              "Trust",
              "Verifiable systems create durable confidence over time.",
            ],
            [
              "Coordination",
              "Shared structure turns scattered signals into meaningful action.",
            ],
            [
              "Connection",
              "Human connection deepens through participation, memory, and contribution.",
            ],
          ].map(([title, copy]) => (
            <div
              key={title}
              className="rounded-[28px] border border-white/8 bg-white/[0.03] p-6"
            >
              <div className="text-lg font-medium text-white">{title}</div>
              <p className="mt-3 text-sm leading-7 text-white/60 md:text-base">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}