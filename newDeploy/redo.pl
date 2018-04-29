#!/usr/local/bin/perl

open(IN1, "ids.dat");
my @ids = <IN1>;
open(IN2, "newIds.dat");
my @newIds = <IN2>;

my $ii = 0;
while($ii < 87) {
    $old = $ids[$ii];
    $new = $newIds[$ii];
    chomp $old;
    chomp $new;
    print "Converting <$old> to <$new>\n";
    open(IN3, "temp.json");
    open(OUT, ">temp2.json");
    while(<IN3>) {
       if ($_ =~ s/$old/$new/) {
          print "Rewrote $_\n";
       }
       print OUT $_;
    }
    close OUT;
    close IN3;
    rename( "temp2.json", "temp.json" );
    $ii = $ii + 1;
}

