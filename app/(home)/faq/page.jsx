"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqSections = [
{
id: "orders",
title: "Orders",
items: [
{
value: "orders-1",
trigger: "Bring of had which their whose you're it own?",
content:
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
},
{
value: "orders-2",
trigger: "Over shall air can't subdue fly divide him?",
content:
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
},
{
value: "orders-3",
trigger: "Waters one you'll creeping?",
content:
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
},
],
},
{
id: "shipping",
title: "Shipping",
items: [
{
value: "shipping-1",
trigger: "Bring of had which their whose you're it own?",
content:
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
},
{
value: "shipping-2",
trigger: "Over shall air can't subdue fly divide him?",
content:
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
},
{
value: "shipping-3",
trigger: "Waters one you'll creeping?",
content:
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
},
],
},
{
id: "payment",
title: "payment",
items: [
{
value: "payment-1",
trigger: "Bring of had which their whose you're it own?",
content:
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
},
{
value: "payment-2",
trigger: "Over shall air can't subdue fly divide him?",
content:
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
},
{
value: "payment-3",
trigger: "Waters one you'll creeping?",
content:
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
},
],
},
];

// Custom FAQ Item open/close state
const FAQItem = ({ item }) => {
const [open, setOpen] = useState(false);

return (
<div className="">
<button
onClick={() => setOpen(!open)}
className="w-full flex items-center justify-between my-6 border-b border-[#222222] text-left"
>
<span className="text-base font-medium text-[#222222]">
{item.trigger}
</span>
{open ? (
<Minus className="shrink-0 ml-4 text-[#222222]" size={18} />
) : (
<Plus className="shrink-0 ml-4 text-[#222222]" size={18} />
)}
</button>
{open && (
<div className="text-[#666666] text-sm leading-7.5 pb-8">
{item.content}
</div>
)}
</div>
);
};

const Page = () => {
return (
<section className="min-h-screen bg-white font-sans">
<div className="max-w-232.5 mx-auto px-6 py-16">
<h2 className="font-bold text-3xl md:text-4xl text-[#222222] mb-16 tracking-tight">
FREQUENTLY ASKED QUESTIONS
</h2>

<div className="flex flex-col gap-16">
{faqSections.map((section) => (
<div key={section.id} className="w-full">
<h4 className="font-medium text-[26px] text-[#222222] mb-6">
{section.title}
</h4>

<div className="w-full ">
{section.items.map((item) => (
<FAQItem key={item.value} item={item} />
))}
</div>
</div>
))}
</div>
</div>
</section>
);
};

export default Page;
