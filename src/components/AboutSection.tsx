export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-center font-display text-6xl text-foreground">بِسَّة</h2>

      <div className="mt-14 space-y-5 text-lg leading-loose text-foreground/90">
        <p>
          هو موقع بسيط بيساعدك تتعرف على سلالات القطط المختلفة بسهولة. بدل ما تدور وسط معلومات
          متفرقة، بِسَّة بيجمعلك كل سلالات القطط في مكان واحد، مع إمكانية الفلترة حسب:
        </p>

        <p>
          <span className="font-bold text-primary">طبيعة القط:</span> لطيف و هادئ أم نشيط ولعوب.
        </p>
        <p>
          <span className="font-bold text-primary">نوع الفرو:</span> طويل الشعر، قصير الشعر، أو
          بدون شعر، أو مجعد الشعر.
        </p>
        <p>
          <span className="font-bold text-primary">السلالات النادرة:</span> لو حابب تستكشف سلالات
          أقل شيوعاً ومختلفة عن المعتاد.
        </p>

        <p className="pt-6 font-bold">
          الهدف إنك توصل للسلالة اللي تناسبك أو تناسب اهتمامك بسرعة وبساطة، من غير تعقيد.
        </p>
      </div>
    </section>
  );
}
